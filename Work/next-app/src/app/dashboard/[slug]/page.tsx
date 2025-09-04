import {Counter} from "@/app/components/Counter"

type Params= Promise<{slug: string}>;

export default async function DashboardRoute( {params} : {params:Params} ){

    const {slug}= await params;

    return <h1>Hello from Slug : {slug}
    <Counter />
    </h1>
}