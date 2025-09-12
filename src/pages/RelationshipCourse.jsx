import { relationshipCourse } from "./Coursedata";
import CoursePage from "./Coursepage";
function RelationshipCourse(){
    return(<>
<CoursePage userId="relationship" course={relationshipCourse} />
    </>);
}
export default RelationshipCourse
