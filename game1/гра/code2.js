gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDGame_9595OverObjects1= [];
gdjs.Game_32OverCode.GDGame_9595OverObjects2= [];
gdjs.Game_32OverCode.GDNewTiledSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewTiledSpriteObjects2= [];
gdjs.Game_32OverCode.GDrestart_9595button_9595Objects1= [];
gdjs.Game_32OverCode.GDrestart_9595button_9595Objects2= [];
gdjs.Game_32OverCode.GDmenu_9595buttonObjects1= [];
gdjs.Game_32OverCode.GDmenu_9595buttonObjects2= [];


gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDrestart_95959595button_95959595Objects1Objects = Hashtable.newFrom({"restart_button_": gdjs.Game_32OverCode.GDrestart_9595button_9595Objects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDmenu_95959595buttonObjects1Objects = Hashtable.newFrom({"menu_button": gdjs.Game_32OverCode.GDmenu_9595buttonObjects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("restart_button_"), gdjs.Game_32OverCode.GDrestart_9595button_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDrestart_95959595button_95959595Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu_button"), gdjs.Game_32OverCode.GDmenu_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDmenu_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGame_9595OverObjects1.length = 0;
gdjs.Game_32OverCode.GDGame_9595OverObjects2.length = 0;
gdjs.Game_32OverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDrestart_9595button_9595Objects1.length = 0;
gdjs.Game_32OverCode.GDrestart_9595button_9595Objects2.length = 0;
gdjs.Game_32OverCode.GDmenu_9595buttonObjects1.length = 0;
gdjs.Game_32OverCode.GDmenu_9595buttonObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDGame_9595OverObjects1.length = 0;
gdjs.Game_32OverCode.GDGame_9595OverObjects2.length = 0;
gdjs.Game_32OverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDrestart_9595button_9595Objects1.length = 0;
gdjs.Game_32OverCode.GDrestart_9595button_9595Objects2.length = 0;
gdjs.Game_32OverCode.GDmenu_9595buttonObjects1.length = 0;
gdjs.Game_32OverCode.GDmenu_9595buttonObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
