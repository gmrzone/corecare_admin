import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
import ListTable from "../components/common/ListTable";
const Posts = () => {
    const tableData = [
        {
            id: 1,
            title: "Nuxt Auth 'loginWith' function doesn't send data to DRF",
            author: "AFzal Saiyed",
            body: "",
            category: "Cleaner",
            active: true
        },
        {
            id: 2,
            title: "Luxury Bathrooms: Steal These 7 Clever (And Practical!) Ideas",
            author: "AFzal Saiyed",
            body: "",
            category: "Cleaner",
            active: true
        },
        {
            id: 3,
            title: "Vastu for Toilets & Bathrooms: 5+ Helpful Tips for Your Indian Home",
            author: "AFzal Saiyed",
            body: "",
            category: "Cleaner",
            active: true
        },
        {
            id: 4,
            title: "5 Best Places To Install CCTV In Your Home",
            author: "AFzal Saiyed",
            body: "",
            category: "Cleaner",
            active: true
        },
        {
            id: 5,
            title: "7 Ways CCTVs Might Disappoint You",
            author: "AFzal Saiyed",
            body: "",
            category: "Cleaner",
            active: true
        },
        {
            id: 6,
            title: "Top 5 Things to Consider While Hiring A CCTV Camera Dealer",
            author: "AFzal Saiyed",
            body: "",
            category: "Cleaner",
            active: true
        },
        {
            id: 7,
            title: "How To Purify Your Home & Breathe Healthy",
            author: "AFzal Saiyed",
            body: "",
            category: "Cleaner",
            active: true
        },
    ];
    const tableHead = ["title", "Author", "Body", "Category", "Active"];
    const tableBody = tableData.map((x, i) => {
        return (
            <tr key={x.id}>
                <td>{x.title.substring(0, 20) + "..."}</td>
                <td>{x.author}</td>
                <td>{x.body}</td>
                <td>{x.category}</td>
                <td>{x.active.toString()}</td>
            </tr>
        )
    })
    return (
        <MainLayout>
            <ComponentWrapper>
                <CreateAction forPage="Post" />
            </ComponentWrapper>
            <DateRangePicker />
            <ComponentWrapper>
                <ListTable headData={tableHead} bodyData={tableBody} />
            </ComponentWrapper>
        </MainLayout>
    );
};

export default Posts;
