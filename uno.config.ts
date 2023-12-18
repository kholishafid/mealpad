import transformDirectives from "@unocss/transformer-directives";
import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Assistant:200,300,400,500,600",
      },
    }),
  ],
  transformers: [transformerVariantGroup(), transformDirectives()],
});
