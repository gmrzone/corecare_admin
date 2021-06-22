import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
const Posts = () => {
    return (
        <MainLayout>
            <ComponentWrapper>
                <CreateAction forPage="Post" />
            </ComponentWrapper>
            <DateRangePicker />
        </MainLayout>
    );
};

export default Posts;
