import { NextResponse } from "next/server";
import { dbConnect } from "@/app/lib/mongoose";
import { models, model } from "mongoose"
import { TimelineData, TimelineSchema, TimelineResponse } from "@/app/models/timeline";

const Timeline = models.Timeline || model<TimelineData>("Timeline", TimelineSchema);

export async function GET() {
    try {
        await dbConnect();

        const allTimelines = await Timeline.find().lean<TimelineData[]>();
        const validTimelines = allTimelines.map((t) => ({
            ...t,
            _id: t._id.toString(), // converts (Mongo) ObjectId -> string
        }));

        const response: TimelineResponse = {
            success: true,
            message: "Successfully fetched timelines from database",
            timelines: validTimelines,
            timestamp: new Date().toISOString(),
        };

        return NextResponse.json(response);
    }
    catch(error) {
        const response: TimelineResponse = {
            success: false,
            error: "Failed to retrieve timelines from database",
            details: error instanceof Error ? error.message : "Unknown error",
            timestamp: new Date().toISOString(),
        };

        return NextResponse.json(response, { status: 500 });    
    }
}