gdjs.SouthCode = {};
gdjs.SouthCode.GDHeroObjects1= [];
gdjs.SouthCode.GDHeroObjects2= [];
gdjs.SouthCode.GDHeroObjects3= [];
gdjs.SouthCode.GDRedObjects1= [];
gdjs.SouthCode.GDRedObjects2= [];
gdjs.SouthCode.GDRedObjects3= [];
gdjs.SouthCode.GDGreenObjects1= [];
gdjs.SouthCode.GDGreenObjects2= [];
gdjs.SouthCode.GDGreenObjects3= [];
gdjs.SouthCode.GDGreenStoryObjects1= [];
gdjs.SouthCode.GDGreenStoryObjects2= [];
gdjs.SouthCode.GDGreenStoryObjects3= [];
gdjs.SouthCode.GDRedStoryObjects1= [];
gdjs.SouthCode.GDRedStoryObjects2= [];
gdjs.SouthCode.GDRedStoryObjects3= [];
gdjs.SouthCode.GDNewObject4Objects1= [];
gdjs.SouthCode.GDNewObject4Objects2= [];
gdjs.SouthCode.GDNewObject4Objects3= [];
gdjs.SouthCode.GDAmmoObjects1= [];
gdjs.SouthCode.GDAmmoObjects2= [];
gdjs.SouthCode.GDAmmoObjects3= [];
gdjs.SouthCode.GDAmmoTextObjects1= [];
gdjs.SouthCode.GDAmmoTextObjects2= [];
gdjs.SouthCode.GDAmmoTextObjects3= [];
gdjs.SouthCode.GDBulletObjects1= [];
gdjs.SouthCode.GDBulletObjects2= [];
gdjs.SouthCode.GDBulletObjects3= [];

gdjs.SouthCode.conditionTrue_0 = {val:false};
gdjs.SouthCode.condition0IsTrue_0 = {val:false};
gdjs.SouthCode.condition1IsTrue_0 = {val:false};
gdjs.SouthCode.condition2IsTrue_0 = {val:false};
gdjs.SouthCode.condition3IsTrue_0 = {val:false};
gdjs.SouthCode.conditionTrue_1 = {val:false};
gdjs.SouthCode.condition0IsTrue_1 = {val:false};
gdjs.SouthCode.condition1IsTrue_1 = {val:false};
gdjs.SouthCode.condition2IsTrue_1 = {val:false};
gdjs.SouthCode.condition3IsTrue_1 = {val:false};


gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDHeroObjects1Objects = Hashtable.newFrom({"Hero": gdjs.SouthCode.GDHeroObjects1});gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDGreenObjects1Objects = Hashtable.newFrom({"Green": gdjs.SouthCode.GDGreenObjects1});gdjs.SouthCode.eventsList0x2132e8ac = function(runtimeScene) {

{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDGreenStoryObjects2.createFrom(gdjs.SouthCode.GDGreenStoryObjects1);

{for(var i = 0, len = gdjs.SouthCode.GDGreenStoryObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDGreenStoryObjects2[i].setBBText("Hello I am green square");
}
}}

}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDGreenStoryObjects2.createFrom(gdjs.SouthCode.GDGreenStoryObjects1);

{for(var i = 0, len = gdjs.SouthCode.GDGreenStoryObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDGreenStoryObjects2[i].setBBText("What?! A murder!?");
}
}}

}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SouthCode.GDGreenStoryObjects1 */
{for(var i = 0, len = gdjs.SouthCode.GDGreenStoryObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDGreenStoryObjects1[i].setBBText("Just between us...red square seems suspicious");
}
}}

}


}; //End of gdjs.SouthCode.eventsList0x2132e8ac
gdjs.SouthCode.eventsList0x2132e814 = function(runtimeScene) {

{

gdjs.SouthCode.GDGreenObjects1.createFrom(runtimeScene.getObjects("Green"));
gdjs.SouthCode.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));

gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDHeroObjects1Objects, gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDGreenObjects1Objects, 50, false);
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDGreenStoryObjects1.createFrom(runtimeScene.getObjects("GreenStory"));
{for(var i = 0, len = gdjs.SouthCode.GDGreenStoryObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDGreenStoryObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.SouthCode.eventsList0x2132e8ac(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.SouthCode.eventsList0x2132e814
gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDHeroObjects1Objects = Hashtable.newFrom({"Hero": gdjs.SouthCode.GDHeroObjects1});gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDRedObjects1Objects = Hashtable.newFrom({"Red": gdjs.SouthCode.GDRedObjects1});gdjs.SouthCode.eventsList0x2132f2f4 = function(runtimeScene) {

{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDRedStoryObjects2.createFrom(gdjs.SouthCode.GDRedStoryObjects1);

{for(var i = 0, len = gdjs.SouthCode.GDRedStoryObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDRedStoryObjects2[i].setBBText("Hello I am red square");
}
}}

}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDRedStoryObjects2.createFrom(gdjs.SouthCode.GDRedStoryObjects1);

{for(var i = 0, len = gdjs.SouthCode.GDRedStoryObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDRedStoryObjects2[i].setBBText("What?! A murder!?");
}
}}

}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 4;
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SouthCode.GDRedStoryObjects1 */
{for(var i = 0, len = gdjs.SouthCode.GDRedStoryObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDRedStoryObjects1[i].setBBText("Just between us...green square seems suspicious");
}
}}

}


}; //End of gdjs.SouthCode.eventsList0x2132f2f4
gdjs.SouthCode.eventsList0x2132f224 = function(runtimeScene) {

{

gdjs.SouthCode.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));
gdjs.SouthCode.GDRedObjects1.createFrom(runtimeScene.getObjects("Red"));

gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDHeroObjects1Objects, gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDRedObjects1Objects, 50, false);
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDRedStoryObjects1.createFrom(runtimeScene.getObjects("RedStory"));
{for(var i = 0, len = gdjs.SouthCode.GDRedStoryObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDRedStoryObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.SouthCode.eventsList0x2132f2f4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.SouthCode.eventsList0x2132f224
gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.SouthCode.GDBulletObjects2});gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDHeroObjects2Objects = Hashtable.newFrom({"Hero": gdjs.SouthCode.GDHeroObjects2});gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDAmmoObjects2Objects = Hashtable.newFrom({"Ammo": gdjs.SouthCode.GDAmmoObjects2});gdjs.SouthCode.eventsList0x2132fc7c = function(runtimeScene) {

{


gdjs.SouthCode.condition0IsTrue_0.val = false;
gdjs.SouthCode.condition1IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
}if ( gdjs.SouthCode.condition0IsTrue_0.val ) {
{
gdjs.SouthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > 0;
}}
if (gdjs.SouthCode.condition1IsTrue_0.val) {
gdjs.SouthCode.GDAmmoTextObjects2.createFrom(runtimeScene.getObjects("AmmoText"));
gdjs.SouthCode.GDHeroObjects2.createFrom(runtimeScene.getObjects("Hero"));
gdjs.SouthCode.GDBulletObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(2).sub(1);
}{for(var i = 0, len = gdjs.SouthCode.GDAmmoTextObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDAmmoTextObjects2[i].setBBText("Ammo Left: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDBulletObjects2Objects, "Bullet", (( gdjs.SouthCode.GDHeroObjects2.length === 0 ) ? 0 :gdjs.SouthCode.GDHeroObjects2[0].getPointX("")), (( gdjs.SouthCode.GDHeroObjects2.length === 0 ) ? 0 :gdjs.SouthCode.GDHeroObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.SouthCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDBulletObjects2[i].addForce(100, 0, 1);
}
}}

}


{

gdjs.SouthCode.GDAmmoObjects2.createFrom(runtimeScene.getObjects("Ammo"));
gdjs.SouthCode.GDHeroObjects2.createFrom(runtimeScene.getObjects("Hero"));

gdjs.SouthCode.condition0IsTrue_0.val = false;
gdjs.SouthCode.condition1IsTrue_0.val = false;
gdjs.SouthCode.condition2IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDHeroObjects2Objects, gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDAmmoObjects2Objects, 50, false);
}if ( gdjs.SouthCode.condition0IsTrue_0.val ) {
{
gdjs.SouthCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.SouthCode.condition1IsTrue_0.val ) {
{
{gdjs.SouthCode.conditionTrue_1 = gdjs.SouthCode.condition2IsTrue_0;
gdjs.SouthCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(556991204);
}
}}
}
if (gdjs.SouthCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SouthCode.GDAmmoObjects2 */
gdjs.SouthCode.GDAmmoTextObjects2.createFrom(runtimeScene.getObjects("AmmoText"));
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.SouthCode.GDAmmoTextObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDAmmoTextObjects2[i].setBBText("Ammo Left: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.SouthCode.GDAmmoObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDAmmoObjects2[i].hide();
}
}}

}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(gdjs.VariablesContainer.badVariable) == 1;
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDAmmoTextObjects1.createFrom(runtimeScene.getObjects("AmmoText"));
{for(var i = 0, len = gdjs.SouthCode.GDAmmoTextObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDAmmoTextObjects1[i].setBBText("Ammo Left: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


}; //End of gdjs.SouthCode.eventsList0x2132fc7c
gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.SouthCode.GDBulletObjects2});gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.SouthCode.GDRedObjects2});gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.SouthCode.GDBulletObjects1});gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDGreenObjects1Objects = Hashtable.newFrom({"Green": gdjs.SouthCode.GDGreenObjects1});gdjs.SouthCode.eventsList0x21330804 = function(runtimeScene) {

{

gdjs.SouthCode.GDBulletObjects2.createFrom(runtimeScene.getObjects("Bullet"));
gdjs.SouthCode.GDRedObjects2.createFrom(runtimeScene.getObjects("Red"));

gdjs.SouthCode.condition0IsTrue_0.val = false;
gdjs.SouthCode.condition1IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDBulletObjects2Objects, gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDRedObjects2Objects, 50, false);
}if ( gdjs.SouthCode.condition0IsTrue_0.val ) {
{
{gdjs.SouthCode.conditionTrue_1 = gdjs.SouthCode.condition1IsTrue_0;
gdjs.SouthCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(556992972);
}
}}
if (gdjs.SouthCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SouthCode.GDBulletObjects2 */
/* Reuse gdjs.SouthCode.GDRedObjects2 */
{for(var i = 0, len = gdjs.SouthCode.GDRedObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDRedObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.SouthCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDBulletObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.SouthCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.SouthCode.GDBulletObjects2[i].hide();
}
}}

}


{

gdjs.SouthCode.GDBulletObjects1.createFrom(runtimeScene.getObjects("Bullet"));
gdjs.SouthCode.GDGreenObjects1.createFrom(runtimeScene.getObjects("Green"));

gdjs.SouthCode.condition0IsTrue_0.val = false;
gdjs.SouthCode.condition1IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDBulletObjects1Objects, gdjs.SouthCode.mapOfGDgdjs_46SouthCode_46GDGreenObjects1Objects, 50, false);
}if ( gdjs.SouthCode.condition0IsTrue_0.val ) {
{
{gdjs.SouthCode.conditionTrue_1 = gdjs.SouthCode.condition1IsTrue_0;
gdjs.SouthCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(556993620);
}
}}
if (gdjs.SouthCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SouthCode.GDBulletObjects1 */
/* Reuse gdjs.SouthCode.GDGreenObjects1 */
{for(var i = 0, len = gdjs.SouthCode.GDGreenObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDGreenObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SouthCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDBulletObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.SouthCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDBulletObjects1[i].hide();
}
}}

}


}; //End of gdjs.SouthCode.eventsList0x21330804
gdjs.SouthCode.eventsList0x5b69a8 = function(runtimeScene) {

{


gdjs.SouthCode.eventsList0x2132e814(runtimeScene);
}


{


gdjs.SouthCode.eventsList0x2132f224(runtimeScene);
}


{


gdjs.SouthCode.eventsList0x2132fc7c(runtimeScene);
}


{


gdjs.SouthCode.eventsList0x21330804(runtimeScene);
}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));
{for(var i = 0, len = gdjs.SouthCode.GDHeroObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDHeroObjects1[i].setY(gdjs.SouthCode.GDHeroObjects1[i].getY() - (3));
}
}}

}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));
{for(var i = 0, len = gdjs.SouthCode.GDHeroObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDHeroObjects1[i].setY(gdjs.SouthCode.GDHeroObjects1[i].getY() + (3));
}
}}

}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));
{for(var i = 0, len = gdjs.SouthCode.GDHeroObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDHeroObjects1[i].setX(gdjs.SouthCode.GDHeroObjects1[i].getX() + (3));
}
}}

}


{


gdjs.SouthCode.condition0IsTrue_0.val = false;
{
gdjs.SouthCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.SouthCode.condition0IsTrue_0.val) {
gdjs.SouthCode.GDHeroObjects1.createFrom(runtimeScene.getObjects("Hero"));
{for(var i = 0, len = gdjs.SouthCode.GDHeroObjects1.length ;i < len;++i) {
    gdjs.SouthCode.GDHeroObjects1[i].setX(gdjs.SouthCode.GDHeroObjects1[i].getX() - (3));
}
}}

}


}; //End of gdjs.SouthCode.eventsList0x5b69a8


gdjs.SouthCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SouthCode.GDHeroObjects1.length = 0;
gdjs.SouthCode.GDHeroObjects2.length = 0;
gdjs.SouthCode.GDHeroObjects3.length = 0;
gdjs.SouthCode.GDRedObjects1.length = 0;
gdjs.SouthCode.GDRedObjects2.length = 0;
gdjs.SouthCode.GDRedObjects3.length = 0;
gdjs.SouthCode.GDGreenObjects1.length = 0;
gdjs.SouthCode.GDGreenObjects2.length = 0;
gdjs.SouthCode.GDGreenObjects3.length = 0;
gdjs.SouthCode.GDGreenStoryObjects1.length = 0;
gdjs.SouthCode.GDGreenStoryObjects2.length = 0;
gdjs.SouthCode.GDGreenStoryObjects3.length = 0;
gdjs.SouthCode.GDRedStoryObjects1.length = 0;
gdjs.SouthCode.GDRedStoryObjects2.length = 0;
gdjs.SouthCode.GDRedStoryObjects3.length = 0;
gdjs.SouthCode.GDNewObject4Objects1.length = 0;
gdjs.SouthCode.GDNewObject4Objects2.length = 0;
gdjs.SouthCode.GDNewObject4Objects3.length = 0;
gdjs.SouthCode.GDAmmoObjects1.length = 0;
gdjs.SouthCode.GDAmmoObjects2.length = 0;
gdjs.SouthCode.GDAmmoObjects3.length = 0;
gdjs.SouthCode.GDAmmoTextObjects1.length = 0;
gdjs.SouthCode.GDAmmoTextObjects2.length = 0;
gdjs.SouthCode.GDAmmoTextObjects3.length = 0;
gdjs.SouthCode.GDBulletObjects1.length = 0;
gdjs.SouthCode.GDBulletObjects2.length = 0;
gdjs.SouthCode.GDBulletObjects3.length = 0;

gdjs.SouthCode.eventsList0x5b69a8(runtimeScene);
return;

}

gdjs['SouthCode'] = gdjs.SouthCode;
