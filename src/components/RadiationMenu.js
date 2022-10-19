import { Menu } from "antd";
import { RAttrItem } from "./const.ts";

// 日总辐射菜单
export const RadiationMenu = ({
  activeKey,
  changeMenu
}) => {
  return (
    <>
      <Menu mode="horizontal"
        defaultSelectedKeys={[activeKey + ""]}
        onSelect={menu => changeMenu(menu.key)}>
        {
          Object.keys(RAttrItem).map((item, _) => (
            <Menu.Item key={item}>{RAttrItem[item]}</Menu.Item>
          ))
        }
      </Menu>
    </>
  );
};