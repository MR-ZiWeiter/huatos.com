export class AddParent {
    Type_Name: string;
}
export class UpdataParent {
    Type_ID: number;
    Type_Name: string;
}
export class DeleteParent {
    Type_ID: number;
}
export class AddChild {
    SmallType_Name: string;
    Type_ID: number;
}
export class UpdataChild {
    SmallType_ID: number;
    SmallType_Name: string;
    Type_ID: number;
}
export class DeleteChild {
    SmallType_ID: number;
}
export class Cate {
    Type_Name: string;
    SmallType_Name: string;
    Type_ID: number;
    SmallType_ID: number;
}
