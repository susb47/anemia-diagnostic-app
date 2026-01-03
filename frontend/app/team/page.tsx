// We import the Team component we built earlier
// The "../" moves up folders. We go up from 'team' -> 'app' -> 'components'
import TeamComponent from "../components/Team";

// You MUST have 'export default' here for Next.js to recognize this page
export default function Page() {
  return (
    <>
      <TeamComponent />
    </>
  );
}