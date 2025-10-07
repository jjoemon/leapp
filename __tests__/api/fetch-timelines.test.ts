import { GET } from "@/app/api/fetch-timelines/route"
import { describe, expect, it } from "vitest"

describe("GET /api/fetch-timelines", () => {
    it("return hello world", async () => {
        const response = GET();
        const data = await response.json();
        expect(data).toEqual("Hello world");
    })
})