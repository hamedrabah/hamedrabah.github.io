
gdjs.evtsExt__FireBullet__FireBullet = gdjs.evtsExt__FireBullet__FireBullet || {};

/**
 * Behavior generated from Fire Bullet
 * @class FireBullet
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__FireBullet__FireBullet.FireBullet = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.FireCooldown = behaviorData.FireCooldown !== undefined ? behaviorData.FireCooldown : Number("0.1") || 0;
    this._behaviorData.HasJustFired = false;
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("FireBullet::FireBullet", gdjs.evtsExt__FireBullet__FireBullet.FireBullet);

// Properties:
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.mapOfGDgdjs_46evtsExt_95_95FireBullet_95_95FireBullet_46FireBullet_46prototype_46FireContext_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1});gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].timerElapsedTime("FireCooldown", (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFireCooldown())) ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1 */
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.mapOfGDgdjs_46evtsExt_95_95FireBullet_95_95FireBullet_46FireBullet_46prototype_46FireContext_46GDBulletObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("XPosition")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("YPosition")) || 0 : 0), "");
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1[i].addPolarForce((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 1);
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].resetTimer("FireCooldown");
}
}{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasJustFired(true);
}
}}

}


}; //End of gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList0x5b7298


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.Fire = function(XPosition, YPosition, Bullet, Angle, Speed, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bullet": Bullet
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "XPosition") return XPosition;
if (argName === "YPosition") return YPosition;
if (argName === "Angle") return Angle;
if (argName === "Speed") return Speed;
    return "";
  }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.GDBulletObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.FireContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHasJustFired() ) {
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1[k] = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.eventsList0x5b7298


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFired = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.HasJustFiredContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHasJustFired(false);
}
}}

}


}; //End of gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList0x5b7298


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.doStepPreEventsContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext = {};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.eventsList0x5b7298 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("FireCooldown");
}
}}

}


}; //End of gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.eventsList0x5b7298


gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreated = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype.onCreatedContext.eventsList0x5b7298(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype._getFireCooldown = function() {
    return this._behaviorData.FireCooldown !== undefined ? this._behaviorData.FireCooldown : Number("0.1") || 0;
};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype._setFireCooldown = function(newValue) {
    this._behaviorData.FireCooldown = newValue;
};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype._getHasJustFired = function() {
    return this._behaviorData.HasJustFired !== undefined ? this._behaviorData.HasJustFired : false;
};
gdjs.evtsExt__FireBullet__FireBullet.FireBullet.prototype._setHasJustFired = function(newValue) {
    this._behaviorData.HasJustFired = newValue;
};
