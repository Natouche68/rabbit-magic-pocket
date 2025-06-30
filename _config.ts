import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import container from "npm:markdown-it-container";

const markdown = {
	plugins: [[container, "setup"]],
};

const site = lume({}, { markdown });

site.use(tailwindcss());
site.add("static");

export default site;
