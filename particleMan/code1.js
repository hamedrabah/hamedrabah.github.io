gdjs.NorthCode = {};
gdjs.NorthCode.GDNewObjectObjects1= [];
gdjs.NorthCode.GDNewObjectObjects2= [];
gdjs.NorthCode.GDNewObjectObjects3= [];
gdjs.NorthCode.GDNewObject3Objects1= [];
gdjs.NorthCode.GDNewObject3Objects2= [];
gdjs.NorthCode.GDNewObject3Objects3= [];
gdjs.NorthCode.GDNewObject2Objects1= [];
gdjs.NorthCode.GDNewObject2Objects2= [];
gdjs.NorthCode.GDNewObject2Objects3= [];
gdjs.NorthCode.GDGreenStoryObjects1= [];
gdjs.NorthCode.GDGreenStoryObjects2= [];
gdjs.NorthCode.GDGreenStoryObjects3= [];
gdjs.NorthCode.GDRedStoryObjects1= [];
gdjs.NorthCode.GDRedStoryObjects2= [];
gdjs.NorthCode.GDRedStoryObjects3= [];
gdjs.NorthCode.GDNewObject4Objects1= [];
gdjs.NorthCode.GDNewObject4Objects2= [];
gdjs.NorthCode.GDNewObject4Objects3= [];
gdjs.NorthCode.GDAmmoObjects1= [];
gdjs.NorthCode.GDAmmoObjects2= [];
gdjs.NorthCode.GDAmmoObjects3= [];
gdjs.NorthCode.GDAmmoTextObjects1= [];
gdjs.NorthCode.GDAmmoTextObjects2= [];
gdjs.NorthCode.GDAmmoTextObjects3= [];
gdjs.NorthCode.GDBulletObjects1= [];
gdjs.NorthCode.GDBulletObjects2= [];
gdjs.NorthCode.GDBulletObjects3= [];
gdjs.NorthCode.GDBorderObjects1= [];
gdjs.NorthCode.GDBorderObjects2= [];
gdjs.NorthCode.GDBorderObjects3= [];
gdjs.NorthCode.GDPipeEndObjects1= [];
gdjs.NorthCode.GDPipeEndObjects2= [];
gdjs.NorthCode.GDPipeEndObjects3= [];
gdjs.NorthCode.GDWaterObjects1= [];
gdjs.NorthCode.GDWaterObjects2= [];
gdjs.NorthCode.GDWaterObjects3= [];
gdjs.NorthCode.GDFireObjects1= [];
gdjs.NorthCode.GDFireObjects2= [];
gdjs.NorthCode.GDFireObjects3= [];

gdjs.NorthCode.conditionTrue_0 = {val:false};
gdjs.NorthCode.condition0IsTrue_0 = {val:false};
gdjs.NorthCode.condition1IsTrue_0 = {val:false};
gdjs.NorthCode.condition2IsTrue_0 = {val:false};
gdjs.NorthCode.conditionTrue_1 = {val:false};
gdjs.NorthCode.condition0IsTrue_1 = {val:false};
gdjs.NorthCode.condition1IsTrue_1 = {val:false};
gdjs.NorthCode.condition2IsTrue_1 = {val:false};


gdjs.NorthCode.eventsList0x2133259c = function(runtimeScene) {

{


gdjs.NorthCode.condition0IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.NorthCode.condition0IsTrue_0.val) {
gdjs.NorthCode.GDFireObjects2.createFrom(runtimeScene.getObjects("Fire"));
gdjs.NorthCode.GDWaterObjects2.createFrom(runtimeScene.getObjects("Water"));
{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].setY(gdjs.NorthCode.GDWaterObjects2[i].getY() - (5));
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects2[i].setY(gdjs.NorthCode.GDFireObjects2[i].getY() - (5));
}
}}

}


{


gdjs.NorthCode.condition0IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.NorthCode.condition0IsTrue_0.val) {
gdjs.NorthCode.GDFireObjects2.createFrom(runtimeScene.getObjects("Fire"));
gdjs.NorthCode.GDWaterObjects2.createFrom(runtimeScene.getObjects("Water"));
{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].setX(gdjs.NorthCode.GDWaterObjects2[i].getX() + (3));
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects2[i].setX(gdjs.NorthCode.GDFireObjects2[i].getX() + (3));
}
}}

}


{


gdjs.NorthCode.condition0IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.NorthCode.condition0IsTrue_0.val) {
gdjs.NorthCode.GDFireObjects1.createFrom(runtimeScene.getObjects("Fire"));
gdjs.NorthCode.GDWaterObjects1.createFrom(runtimeScene.getObjects("Water"));
{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects1.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects1[i].setX(gdjs.NorthCode.GDWaterObjects1[i].getX() - (3));
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects1.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects1[i].setX(gdjs.NorthCode.GDFireObjects1[i].getX() - (3));
}
}}

}


}; //End of gdjs.NorthCode.eventsList0x2133259c
gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDWaterObjects2Objects = Hashtable.newFrom({"Water": gdjs.NorthCode.GDWaterObjects2});gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDPipeEndObjects2Objects = Hashtable.newFrom({"PipeEnd": gdjs.NorthCode.GDPipeEndObjects2});gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDFireObjects2Objects = Hashtable.newFrom({"Fire": gdjs.NorthCode.GDFireObjects2});gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDNewObject2Objects2Objects = Hashtable.newFrom({"NewObject2": gdjs.NorthCode.GDNewObject2Objects2});gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDFireObjects2Objects = Hashtable.newFrom({"Fire": gdjs.NorthCode.GDFireObjects2});gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDPipeEndObjects2Objects = Hashtable.newFrom({"PipeEnd": gdjs.NorthCode.GDPipeEndObjects2});gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDWaterObjects2Objects = Hashtable.newFrom({"Water": gdjs.NorthCode.GDWaterObjects2});gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDNewObject2Objects2Objects = Hashtable.newFrom({"NewObject2": gdjs.NorthCode.GDNewObject2Objects2});gdjs.NorthCode.eventsList0x213319ec = function(runtimeScene) {

{

gdjs.NorthCode.GDPipeEndObjects2.createFrom(runtimeScene.getObjects("PipeEnd"));
gdjs.NorthCode.GDWaterObjects2.createFrom(runtimeScene.getObjects("Water"));

gdjs.NorthCode.condition0IsTrue_0.val = false;
gdjs.NorthCode.condition1IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDWaterObjects2Objects, gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDPipeEndObjects2Objects, 50, false);
}if ( gdjs.NorthCode.condition0IsTrue_0.val ) {
{
{gdjs.NorthCode.conditionTrue_1 = gdjs.NorthCode.condition1IsTrue_0;
gdjs.NorthCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(556997556);
}
}}
if (gdjs.NorthCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NorthCode.GDPipeEndObjects2 */
{for(var i = 0, len = gdjs.NorthCode.GDPipeEndObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDPipeEndObjects2[i].setAnimation(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}}

}


{

gdjs.NorthCode.GDFireObjects2.createFrom(runtimeScene.getObjects("Fire"));
gdjs.NorthCode.GDNewObject2Objects2.createFrom(runtimeScene.getObjects("NewObject2"));

gdjs.NorthCode.condition0IsTrue_0.val = false;
gdjs.NorthCode.condition1IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDFireObjects2Objects, gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDNewObject2Objects2Objects, 40, false);
}if ( gdjs.NorthCode.condition0IsTrue_0.val ) {
{
{gdjs.NorthCode.conditionTrue_1 = gdjs.NorthCode.condition1IsTrue_0;
gdjs.NorthCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(556998212);
}
}}
if (gdjs.NorthCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NorthCode.GDNewObject2Objects2 */
{for(var i = 0, len = gdjs.NorthCode.GDNewObject2Objects2.length ;i < len;++i) {
    gdjs.NorthCode.GDNewObject2Objects2[i].setAnimation(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}}

}


{

gdjs.NorthCode.GDFireObjects2.createFrom(runtimeScene.getObjects("Fire"));
gdjs.NorthCode.GDPipeEndObjects2.createFrom(runtimeScene.getObjects("PipeEnd"));

gdjs.NorthCode.condition0IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDFireObjects2Objects, gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDPipeEndObjects2Objects, 50, false);
}if (gdjs.NorthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NorthCode.GDFireObjects2 */
{for(var i = 0, len = gdjs.NorthCode.GDFireObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects2[i].setX(94);
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects2[i].setY(112);
}
}}

}


{

gdjs.NorthCode.GDNewObject2Objects2.createFrom(runtimeScene.getObjects("NewObject2"));
gdjs.NorthCode.GDWaterObjects2.createFrom(runtimeScene.getObjects("Water"));

gdjs.NorthCode.condition0IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDWaterObjects2Objects, gdjs.NorthCode.mapOfGDgdjs_46NorthCode_46GDNewObject2Objects2Objects, 50, false);
}if (gdjs.NorthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NorthCode.GDWaterObjects2 */
{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].setX(94);
}
}{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].setY(112);
}
}}

}


{

gdjs.NorthCode.GDWaterObjects2.createFrom(runtimeScene.getObjects("Water"));

gdjs.NorthCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NorthCode.GDWaterObjects2.length;i<l;++i) {
    if ( gdjs.NorthCode.GDWaterObjects2[i].getY() > 600 ) {
        gdjs.NorthCode.condition0IsTrue_0.val = true;
        gdjs.NorthCode.GDWaterObjects2[k] = gdjs.NorthCode.GDWaterObjects2[i];
        ++k;
    }
}
gdjs.NorthCode.GDWaterObjects2.length = k;}if (gdjs.NorthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NorthCode.GDWaterObjects2 */
{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].setX(94);
}
}{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].setY(112);
}
}}

}


{

gdjs.NorthCode.GDFireObjects1.createFrom(runtimeScene.getObjects("Fire"));

gdjs.NorthCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NorthCode.GDFireObjects1.length;i<l;++i) {
    if ( gdjs.NorthCode.GDFireObjects1[i].getY() > 600 ) {
        gdjs.NorthCode.condition0IsTrue_0.val = true;
        gdjs.NorthCode.GDFireObjects1[k] = gdjs.NorthCode.GDFireObjects1[i];
        ++k;
    }
}
gdjs.NorthCode.GDFireObjects1.length = k;}if (gdjs.NorthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NorthCode.GDFireObjects1 */
{for(var i = 0, len = gdjs.NorthCode.GDFireObjects1.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects1[i].setX(94);
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects1.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects1[i].setY(112);
}
}}

}


}; //End of gdjs.NorthCode.eventsList0x213319ec
gdjs.NorthCode.eventsList0x2132ee7c = function(runtimeScene) {

{


gdjs.NorthCode.condition0IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NorthCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Carl-orff-carmina-burana-o-fortuna.mp3", true, 100, 1);
}}

}


{


gdjs.NorthCode.condition0IsTrue_0.val = false;
gdjs.NorthCode.condition1IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if ( gdjs.NorthCode.condition0IsTrue_0.val ) {
{
{gdjs.NorthCode.conditionTrue_1 = gdjs.NorthCode.condition1IsTrue_0;
gdjs.NorthCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(556986868);
}
}}
if (gdjs.NorthCode.condition1IsTrue_0.val) {
gdjs.NorthCode.GDFireObjects2.createFrom(runtimeScene.getObjects("Fire"));
gdjs.NorthCode.GDWaterObjects2.createFrom(runtimeScene.getObjects("Water"));
{for(var i = 0, len = gdjs.NorthCode.GDFireObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].setPosition(100000000,1000000000);
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects2[i].setPosition(94,112);
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects2[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


{


gdjs.NorthCode.condition0IsTrue_0.val = false;
gdjs.NorthCode.condition1IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if ( gdjs.NorthCode.condition0IsTrue_0.val ) {
{
{gdjs.NorthCode.conditionTrue_1 = gdjs.NorthCode.condition1IsTrue_0;
gdjs.NorthCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(556988156);
}
}}
if (gdjs.NorthCode.condition1IsTrue_0.val) {
gdjs.NorthCode.GDFireObjects2.createFrom(runtimeScene.getObjects("Fire"));
gdjs.NorthCode.GDWaterObjects2.createFrom(runtimeScene.getObjects("Water"));
{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects2[i].setPosition(94,112);
}
}{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].setPosition(100000000,1000000000);
}
}{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects2[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects2.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


{


gdjs.NorthCode.condition0IsTrue_0.val = false;
gdjs.NorthCode.condition1IsTrue_0.val = false;
{
gdjs.NorthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 2;
}if ( gdjs.NorthCode.condition0IsTrue_0.val ) {
{
{gdjs.NorthCode.conditionTrue_1 = gdjs.NorthCode.condition1IsTrue_0;
gdjs.NorthCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(556989524);
}
}}
if (gdjs.NorthCode.condition1IsTrue_0.val) {
gdjs.NorthCode.GDFireObjects1.createFrom(runtimeScene.getObjects("Fire"));
gdjs.NorthCode.GDWaterObjects1.createFrom(runtimeScene.getObjects("Water"));
{for(var i = 0, len = gdjs.NorthCode.GDFireObjects1.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects1.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects1.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects1[i].setPosition(100000000,1000000000);
}
}{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects1.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects1[i].setPosition(94,112);
}
}{for(var i = 0, len = gdjs.NorthCode.GDFireObjects1.length ;i < len;++i) {
    gdjs.NorthCode.GDFireObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.NorthCode.GDWaterObjects1.length ;i < len;++i) {
    gdjs.NorthCode.GDWaterObjects1[i].activateBehavior("PlatformerObject", true);
}
}}

}


}; //End of gdjs.NorthCode.eventsList0x2132ee7c
gdjs.NorthCode.eventsList0x213300b4 = function(runtimeScene) {

{

gdjs.NorthCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));

gdjs.NorthCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NorthCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.NorthCode.GDNewObject2Objects1[i].getAnimation() == 1 ) {
        gdjs.NorthCode.condition0IsTrue_0.val = true;
        gdjs.NorthCode.GDNewObject2Objects1[k] = gdjs.NorthCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.NorthCode.GDNewObject2Objects1.length = k;}if (gdjs.NorthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NorthCode.GDNewObject2Objects1 */
gdjs.NorthCode.GDWaterObjects1.createFrom(runtimeScene.getObjects("Water"));
{for(var i = 0, len = gdjs.NorthCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.NorthCode.GDNewObject2Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.NorthCode.GDWaterObjects1.length === 0 ) ? 0 :gdjs.NorthCode.GDWaterObjects1[0].getPointX("")), (( gdjs.NorthCode.GDWaterObjects1.length === 0 ) ? 0 :gdjs.NorthCode.GDWaterObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.NorthCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.NorthCode.GDNewObject2Objects1[i].getBehavior("Pathfinding").setSpeed(0.01);
}
}{for(var i = 0, len = gdjs.NorthCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.NorthCode.GDNewObject2Objects1[i].getBehavior("Pathfinding").setAcceleration(gdjs.NorthCode.GDNewObject2Objects1[i].getBehavior("Pathfinding").getAcceleration() * (1.01));
}
}}

}


}; //End of gdjs.NorthCode.eventsList0x213300b4
gdjs.NorthCode.eventsList0x5b69a8 = function(runtimeScene) {

{


gdjs.NorthCode.eventsList0x2133259c(runtimeScene);
}


{


gdjs.NorthCode.eventsList0x213319ec(runtimeScene);
}


{


gdjs.NorthCode.eventsList0x2132ee7c(runtimeScene);
}


{


gdjs.NorthCode.eventsList0x213300b4(runtimeScene);
}


}; //End of gdjs.NorthCode.eventsList0x5b69a8


gdjs.NorthCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NorthCode.GDNewObjectObjects1.length = 0;
gdjs.NorthCode.GDNewObjectObjects2.length = 0;
gdjs.NorthCode.GDNewObjectObjects3.length = 0;
gdjs.NorthCode.GDNewObject3Objects1.length = 0;
gdjs.NorthCode.GDNewObject3Objects2.length = 0;
gdjs.NorthCode.GDNewObject3Objects3.length = 0;
gdjs.NorthCode.GDNewObject2Objects1.length = 0;
gdjs.NorthCode.GDNewObject2Objects2.length = 0;
gdjs.NorthCode.GDNewObject2Objects3.length = 0;
gdjs.NorthCode.GDGreenStoryObjects1.length = 0;
gdjs.NorthCode.GDGreenStoryObjects2.length = 0;
gdjs.NorthCode.GDGreenStoryObjects3.length = 0;
gdjs.NorthCode.GDRedStoryObjects1.length = 0;
gdjs.NorthCode.GDRedStoryObjects2.length = 0;
gdjs.NorthCode.GDRedStoryObjects3.length = 0;
gdjs.NorthCode.GDNewObject4Objects1.length = 0;
gdjs.NorthCode.GDNewObject4Objects2.length = 0;
gdjs.NorthCode.GDNewObject4Objects3.length = 0;
gdjs.NorthCode.GDAmmoObjects1.length = 0;
gdjs.NorthCode.GDAmmoObjects2.length = 0;
gdjs.NorthCode.GDAmmoObjects3.length = 0;
gdjs.NorthCode.GDAmmoTextObjects1.length = 0;
gdjs.NorthCode.GDAmmoTextObjects2.length = 0;
gdjs.NorthCode.GDAmmoTextObjects3.length = 0;
gdjs.NorthCode.GDBulletObjects1.length = 0;
gdjs.NorthCode.GDBulletObjects2.length = 0;
gdjs.NorthCode.GDBulletObjects3.length = 0;
gdjs.NorthCode.GDBorderObjects1.length = 0;
gdjs.NorthCode.GDBorderObjects2.length = 0;
gdjs.NorthCode.GDBorderObjects3.length = 0;
gdjs.NorthCode.GDPipeEndObjects1.length = 0;
gdjs.NorthCode.GDPipeEndObjects2.length = 0;
gdjs.NorthCode.GDPipeEndObjects3.length = 0;
gdjs.NorthCode.GDWaterObjects1.length = 0;
gdjs.NorthCode.GDWaterObjects2.length = 0;
gdjs.NorthCode.GDWaterObjects3.length = 0;
gdjs.NorthCode.GDFireObjects1.length = 0;
gdjs.NorthCode.GDFireObjects2.length = 0;
gdjs.NorthCode.GDFireObjects3.length = 0;

gdjs.NorthCode.eventsList0x5b69a8(runtimeScene);
return;

}

gdjs['NorthCode'] = gdjs.NorthCode;
