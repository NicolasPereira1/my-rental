import {useTheme} from "../../hooks/UseTheme/UseTheme";
import {Navigator} from "../../components/Navigator/Navigator";
import {Outlet} from "react-router-dom";
export const HomePage = () => {
    const {theme} = useTheme();
    return (
        <div style={theme.page}>
            <Navigator/>
            <Outlet/>
        </div>
    );
}