import { connectMongoDB } from "@/libs/mongodb";

export async function POST(request: any){
    const {title, description} = await request.json();
    await connectMongoDB();
}