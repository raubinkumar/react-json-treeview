import {SimpleNode} from '../src/components/SimpleNodeRenderer';
import {ObjectNode} from '../src/components/ObjectNodeRenderer';
import {ArrayNode} from '../src/components/ArrayNodeRenderer';
const RendererContainer = new Map();

RendererContainer.set("SimpleNode", SimpleNode);
RendererContainer.set("ObjectNode", ObjectNode);
RendererContainer.set("ArrayNode", ArrayNode);

export default RendererContainer;