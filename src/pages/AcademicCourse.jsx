import { academicCourse } from "./Coursedata";
import CoursePage from "./Coursepage";
function AcademicCourse(){
    return(<>
<CoursePage userId="academic" course={academicCourse} />
    </>);
}
export default AcademicCourse
