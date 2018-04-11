import RenderContainer from './RendererContainer';

export const GetType = (obj: any)=>{
    if (obj === null) {
        return "null";
    }
    else if (obj === undefined) {
        return "undefined";
    }
    else if (obj.constructor === String) {
        return "String";
    }
    else if (obj.constructor === Array) {
        return "Array";
    }
    else if (obj.constructor === Object) {
        return "Object";
    }
    else if (obj.constructor === Number) {
        return "Number";
    }
    else {
        return "don't know";
    }
}

export const GetRenderer= (type: String)=>{
    switch(type){
        case "String":
        case "Number":
            return RenderContainer.get("SimpleNode");
        case "Object":
            return RenderContainer.get("ObjectNode");
        case "Array":
            return RenderContainer.get("ArrayNode");
        default:
            return undefined;
    }
}