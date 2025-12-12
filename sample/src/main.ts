import "./style.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "@webcomponents/custom-elements/custom-elements.min";
import "@webcomponents/custom-elements/src/native-shim.js";
import { defineComponents, IgcDatePickerComponent } from "igniteui-webcomponents";

import * as locales from "./locale.ja.ts";
import { registerLocaleData } from "./locale.ts";

defineComponents(IgcDatePickerComponent);

// ロケールデータの登録
registerLocaleData(locales.ja);