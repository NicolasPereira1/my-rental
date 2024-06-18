import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {HomePage} from "../pages/HomePage/HomePage";
import {VehiclesPage} from "../pages/VehiclesPage/VehiclsPage";
import {YourRental} from "../pages/YourRental/YourRental";
import {AccountPage} from "../pages/AccountPage/AccountPage";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";
import {PreviewPage} from "../pages/PreviewPage/PreviewPage";
import {queryCarList} from "../hooks/UseQuery/UseQuery";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<HomePage/>}>
          <Route index loader={queryCarList} element={<PreviewPage/>}/>
          <Route path='/home' loader={queryCarList} element={<PreviewPage/>}/>
          <Route path='/vehicles' element={<VehiclesPage/>}/>
          <Route path='/your-rental' element={<YourRental/>}/>
          <Route path='/account' element={<AccountPage/>}/>
          <Route path='/*' element={<NotFoundPage/>}/>
      </Route>
  )
);

export const RouterComponent = () => <RouterProvider router={router}/>