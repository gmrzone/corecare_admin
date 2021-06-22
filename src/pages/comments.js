import MainLayout from "../components/common/MainLayout";
import CreateAction from "../components/common/CreateAction";
import ComponentWrapper from "../components/common/ComponentWrapper";
import DateRangePicker from "../components/common/DateRangeFilter";
const Comments = () => {
    return (
        <MainLayout>
            <ComponentWrapper>
                <CreateAction forPage="Comment" />
            </ComponentWrapper>
            <DateRangePicker />
        </MainLayout>
    );
};

export default Comments;
