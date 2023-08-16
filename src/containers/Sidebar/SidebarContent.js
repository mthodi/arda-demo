import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import { useSelector } from "react-redux";

const SidebarContent = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const { navStyle, themeType } = useSelector(({ settings }) => settings);
  const pathname = useSelector(({ common }) => common.pathname);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;

  return (
    <>
      <SidebarLogo sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          {/* <UserProfile/> */}
          {/* <AppsNavigation /> */}
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

            <MenuItemGroup key="main" className="gx-menu-group" title={<IntlMessages id="sidebar.dashboard" />}>

              <SubMenu key="ixp" popupClassName={getNavStyleSubMenuClass(navStyle)}
                title={<span><i className="icon icon-dasbhoard" />
                  <span>IXP</span></span>}>
                <Menu.Item key="ixp/overview">
                  <Link to="/ixp/overview">
                    <i className="icon icon-crypto" />
                      <span>Overview</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="ixp/growth">
                  <Link to="/ixp/growth">
                    <i className="icon icon-crm" />
                      <span>Growth</span>
                    </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="country" popupClassName={getNavStyleSubMenuClass(navStyle)}
              title={<span><i className="icon icon-dasbhoard" />
                <span>Country</span></span>}>

                <Menu.Item key="country/overview">
                  <Link to="/country/overview">
                    <i className="icon icon-crypto" />
                      <span>Overview</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="country/asn-relations">
                  <Link to="/country/asn-relations">
                    <i className="icon icon-crm" />
                      <span>AS Relations</span>
                    </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="region" popupClassName={getNavStyleSubMenuClass(navStyle)}
              title={<span><i className="icon icon-dasbhoard" />
                <span>Region View</span></span>}>

                <Menu.Item key="region/overview">
                  <Link to="/region/overview">
                    <i className="icon icon-crypto" />
                      <span>Overview</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="region/asn-relations">
                  <Link to="/region/asn-relations">
                    <i className="icon icon-crm" />
                      <span>AS Relations</span>
                    </Link>
                </Menu.Item>
              </SubMenu>

            </MenuItemGroup>

            <Menu.Item key="sample">
              <Link to="/sample"><i className="icon icon-widgets" />
                <span><IntlMessages id="sidebar.samplePage" /></span>
              </Link>
            </Menu.Item>

          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

export default React.memo(SidebarContent);

