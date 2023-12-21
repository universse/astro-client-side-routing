import { Link } from "react-router-dom";

export function Component() {
  return (
    <div>
      <h1>App Index</h1>
      <Link to="/settings">Go to App Settings</Link>
    </div>
  );
}
