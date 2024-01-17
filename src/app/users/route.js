import { NextResponse } from "next/server";


import MySQL from "@/lib/mysql";


export async function GET(req,res) {
    const params = req.nextUrl.searchParams
    const email = params.get('email')
    console.log(email)
   /* try {
        if(email !== null){
            const query= `SELECT * FROM users WHERE email='${email}'`
            const sql = await MySQL(query)
            return NextResponse.json(sql)
        }

        const query= `SELECT * FROM users`
        const sql = await MySQL(query)
        return NextResponse.json(sql)
        

        
    } catch (error) {
        return NextResponse.json(error)
    } */
    try {
        let query = null

        if (email !== null) {
            query= `SELECT * FROM users WHERE email='${email}'`
        } else {
            query= `SELECT * FROM users`
        }
 
        const result = await MySQL(query)
        return NextResponse.json(result)
        

        
    } catch (error) {
        return NextResponse.json(error)
    }
};