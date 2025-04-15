gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.GDBackgroundObjects1= [];
gdjs.StartCode.GDBackgroundObjects2= [];
gdjs.StartCode.GDPlay_9595ButtonObjects1= [];
gdjs.StartCode.GDPlay_9595ButtonObjects2= [];
gdjs.StartCode.GDstart_9595textObjects1= [];
gdjs.StartCode.GDstart_9595textObjects2= [];
gdjs.StartCode.GDrulesObjects1= [];
gdjs.StartCode.GDrulesObjects2= [];


gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlay_95959595ButtonObjects1Objects = Hashtable.newFrom({"Play_Button": gdjs.StartCode.GDPlay_9595ButtonObjects1});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.StartCode.GDPlay_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlay_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDBackgroundObjects1.length = 0;
gdjs.StartCode.GDBackgroundObjects2.length = 0;
gdjs.StartCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.StartCode.GDPlay_9595ButtonObjects2.length = 0;
gdjs.StartCode.GDstart_9595textObjects1.length = 0;
gdjs.StartCode.GDstart_9595textObjects2.length = 0;
gdjs.StartCode.GDrulesObjects1.length = 0;
gdjs.StartCode.GDrulesObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDBackgroundObjects1.length = 0;
gdjs.StartCode.GDBackgroundObjects2.length = 0;
gdjs.StartCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.StartCode.GDPlay_9595ButtonObjects2.length = 0;
gdjs.StartCode.GDstart_9595textObjects1.length = 0;
gdjs.StartCode.GDstart_9595textObjects2.length = 0;
gdjs.StartCode.GDrulesObjects1.length = 0;
gdjs.StartCode.GDrulesObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
