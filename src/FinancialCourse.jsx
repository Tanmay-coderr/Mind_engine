import { financialCourse } from "./pages/Coursedata";
import CoursePage from "./pages/Coursepage";
function FinancialCourse(){
    return(<>
<CoursePage userId="financial" course={financialCourse} />
    </>);
}
export default FinancialCourse
