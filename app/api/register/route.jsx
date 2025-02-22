import { NodeNextResponse } from "next/dist/server/base-http/node";

export async function POST(req) {
    try{
        const { name, email, password} = await req.json();

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);


    }catch(error){
        return NextResponse.json({massage:'no'},{status:500});
    }
}