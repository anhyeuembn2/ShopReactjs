import { icons } from "../icons/icons";
const {BsInstagram,BsFacebook,BsBell,MdOutlineContactSupport}=icons;
export const NavIemLeft=[
    {
        element:"Kênh bán hàng",
        path:"/kenh-ban-hang"
    },
    {
        element:"Trở thành Người bán Shopee",
        path:"/tro-thanh-nguoi-ban"
    },{
        element:"Tải ứng dụng",
        path:"/tai-ung-dung"
    },
    {
        element:"Kết nối",
        path:'/ket-noi',
        icon1:<BsFacebook/>,
        icon2:<BsInstagram/>
        
    }
]
export const NavItemRight=[
    {
        element:"Thông báo",
        path:"/thong-bao",
        icon1:<BsBell/>
    },
    {
        element:"Hỗ trợ",
        path:'/ho-tro',
        icon1:<MdOutlineContactSupport/>
    },
    {
        element:"Đăng kí",
        path:"/singup"
    },
    {
        element:"Đăng nhập",
        path:"/singin"
    }

]