// 用接口直接描述函数类型
interface Eat {
    (food: string) : void
}

// 可索引类型<>
interface EmailMap {
    [email: string]: string
}

export interface User {
    name: string
    readonly isMale: boolean // 当我们确定 user 的性别之后就不允许就改 <利用 readonly 我们可以把一个属性变成只读性质>
    age?: number // age 这个字段本身是可选的

    say: (words: string) => string // 在 interface 内部描述函数
    eat: Eat // 用接口直接描述函数类型
    emailMap: EmailMap
}

// 继承
interface VIPUser extends User {
    broadcast: () => void // vip 用户广播特权
}

// 继承
interface AdminUser extends User {
    publish: () => void // 管理员用户 发布特权
}

// 继承多个接口
interface SupperUser extends VIPUser, AdminUser {
    revokeRight: () => void // 超级管理员<拥有撤销权利的特权 + 其他所有权限>
}
