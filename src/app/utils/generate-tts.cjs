require("dotenv").config();
const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Use relative path from project root
const outputDir = path.resolve(__dirname, "/Users/joemonjose/software/leapp/dashboard/public/sounds/numbers/boy");
console.log(`📁 Output directory: ${outputDir}`);
fs.mkdirSync(outputDir, { recursive: true });

async function createSpeech(text, file) {
  try {
    console.log(`🔊 Generating: ${text}`);
    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: "fable", // closest to a youthful/friendly tone
      input: text,
    });

    const buffer = Buffer.from(await response.arrayBuffer());
    const filePath = path.join(outputDir, file);
    fs.writeFileSync(filePath, buffer);
    console.log(`✅ Created ${file} at ${filePath}`);
  } catch (error) {
    console.error(`❌ Error creating ${file}:`, error.message);
  }
}

(async () => {
  try {
    for (let i = 1; i <= 10; i++) {
      await createSpeech(`${i}!`, `${i}.mp3`);
    }
    console.log("🎉 All files generated successfully!");
  } catch (error) {
    console.error("❌ Fatal error:", error.message);
  }
})();
