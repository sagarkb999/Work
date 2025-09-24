"use server"

import { revalidatePath } from "next/cache";
import { SubjectSchema } from "./formValidationSchemas";
import prisma from "./prisma";

type currentState= {success: boolean; error: boolean};

export const createSubject= async (
    currentState: currentState,
    data: SubjectSchema
) =>{
    try{
        await prisma.subject.create({
            data: {
                name: data.name,
            }
        })
        revalidatePath("/list/subjects");
        return {success: true, error: false};
    } catch(err){
        console.log(err);
        return {success: false, error: true};
    }
}