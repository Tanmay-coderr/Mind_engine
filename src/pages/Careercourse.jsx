import { mindEngineCourse } from "./Coursedata";
import CoursePage from "./Coursepage";
function Careercourse(){
    return(<>
<CoursePage userId="career" course={mindEngineCourse} />
    </>);
}
export default Careercourse
