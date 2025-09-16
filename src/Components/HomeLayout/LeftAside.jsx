import { Suspense } from "react";
import Categories from "../Categories";
import Loading from "../../pages/Loading";

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;