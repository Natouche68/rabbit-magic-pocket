import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import favicon from "lume/plugins/favicon.ts";
import { alert } from "npm:@mdit/plugin-alert";

const site = lume();

site.hooks.addMarkdownItPlugin(alert, {
	alertNames: ["important", "note", "tip", "warning", "caution", "setup"],
});

site.use(favicon());

site.use(tailwindcss());
site.add("static");

export default site;
