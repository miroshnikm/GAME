gdjs.winnerCode = {};
gdjs.winnerCode.localVariables = [];
gdjs.winnerCode.GDyou_9595winObjects1= [];
gdjs.winnerCode.GDyou_9595winObjects2= [];
gdjs.winnerCode.GDrestartObjects1= [];
gdjs.winnerCode.GDrestartObjects2= [];


gdjs.winnerCode.mapOfGDgdjs_9546winnerCode_9546GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.winnerCode.GDrestartObjects1});
gdjs.winnerCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.winnerCode.GDrestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.winnerCode.mapOfGDgdjs_9546winnerCode_9546GDrestartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


};

gdjs.winnerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winnerCode.GDyou_9595winObjects1.length = 0;
gdjs.winnerCode.GDyou_9595winObjects2.length = 0;
gdjs.winnerCode.GDrestartObjects1.length = 0;
gdjs.winnerCode.GDrestartObjects2.length = 0;

gdjs.winnerCode.eventsList0(runtimeScene);
gdjs.winnerCode.GDyou_9595winObjects1.length = 0;
gdjs.winnerCode.GDyou_9595winObjects2.length = 0;
gdjs.winnerCode.GDrestartObjects1.length = 0;
gdjs.winnerCode.GDrestartObjects2.length = 0;


return;

}

gdjs['winnerCode'] = gdjs.winnerCode;
