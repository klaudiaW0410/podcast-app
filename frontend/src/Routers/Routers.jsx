import { Route, } from "react-router-dom";
import { PodcastList } from "../Components/PodcastList";
import { PodcastDetails } from "../Components/PodcastDetails";

const routes = (
  <>
    <Route path="/" element={<PodcastList />} />
    <Route path="/podcast/:episodeId" element={<PodcastDetails />} />
  </>
)

export default routes;