import { SearchResultPage } from "@/components/SearchPage/SearchResultPage";


const page = async ({ params }) => {
    const { keyword } = await params;
    return <SearchResultPage keyword={keyword} />;
};

export default page;