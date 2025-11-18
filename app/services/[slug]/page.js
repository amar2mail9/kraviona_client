import { SingleServices } from "@/components/Services/SingleServices";

const page = async ({ params }) => {
    const { slug } = await params;
    return <div>
        <SingleServices slug={slug} />
    </div>

}

export default page