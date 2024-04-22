
Type.createNamespace('TestLocalStorage');TestLocalStorage.TestLocalStorege=function(){TestLocalStorage.TestLocalStorege.constructBase(this);}
TestLocalStorage.TestLocalStorege.prototype={$1_0:null,setup:function(){this.$1_0=new LocalStorage.Storage();if(this.$1_0.isSupported()){this.$1_0.clear();}},teardown:function(){if(this.$1_0.isSupported()){this.$1_0.clear();}},tests:function(){test('Initial state',Delegate.create(this,function(){
ok(this.$1_0.isSupported(),'Local Storage supported');equals(this.$1_0.get_length(),0,'No items yet');this.$1_0.setItem('I1','V1');equals(this.$1_0.get_length(),1,'One item in storage');ok(this.$1_0.hasKey('I1'),'Has key: I1');equals(this.$1_0.getItem('I1'),'V1','Correct first items value');this.$1_0.setItem('I2','V2');equals(this.$1_0.get_length(),2,'Two items in storage');ok(this.$1_0.hasKey('I2'),'Has key: I2');equals(this.$1_0.getItem('I2'),'V2','Correct second items value');this.$1_0.setItem('I1','V1_1');equals(this.$1_0.get_length(),2,'Two items in storage');equals(this.$1_0.getItem('I1'),'V1_1','Correct first items value');ok(this.$1_0.key(0)==='I1'||this.$1_0.key(0)==='I2','Correct first key name');ok(this.$1_0.key(1)==='I1'||this.$1_0.key(1)==='I2','Correct second key name');ok(this.$1_0.key(0)!==this.$1_0.key(1),'First key name is not equal second');this.$1_0.removeItem('I1');ok(!this.$1_0.hasKey('I1'),'Has no key: I1');equals(this.$1_0.get_length(),1,'One item in storage');ok(this.$1_0.hasKey('I2'),'Has key: I2');equals(this.$1_0.getItem('I2'),'V2','Correct item value');ok(this.$1_0.key(0)==='I2','Correct first key name');this.$1_0.setItem('I2',null);ok(this.$1_0.hasKey('I2'),'Has key: I2');this.$1_0.clear();ok(!this.$1_0.hasKey('I2'),'Has no key: I2');equals(this.$1_0.get_length(),0,'Items cleared');}));test('JSON integration',Delegate.create(this,function(){
equals(this.$1_0.get_length(),0,'No items yet');var $1_0={};$1_0.o1f1 = 'o1f1v1';$1_0.o1f2 = 7;$1_0.o1f3 = true;var $1_1={};$1_1.o2f1 = 'o2f1v1';$1_1.o2f2 = 3;$1_0.o1f4 = $1_1;this.$1_0.setObjectItem('I1',$1_0);equals(this.$1_0.get_length(),1,'One item in storage');var $1_2=this.$1_0.getObjectItem('I1');equals($1_2.o1f1,'o1f1v1','Correct o1f1 value');equals($1_2.o1f2,7,'Correct o1f2 value');equals($1_2.o1f3,true,'Correct o1f3 value');var $1_3=$1_2.o1f4;equals($1_3.o2f1,'o2f1v1','Correct o2f1 value');equals($1_3.o2f2,3,'Correct o2f2 value');var $1_4={};$1_4['k1']='v1';$1_4['k2']=8;$1_4['k3.1']=null;this.$1_0.setObjectItem('I2',$1_4);equals(this.$1_0.get_length(),2,'Two items in storage');var $1_5=this.$1_0.getObjectItem('I2');equals(Object.getKeyCount($1_5),3,'All key values received from storage');equals($1_5['k1'],'v1','Correct k1 value');equals($1_5['k2'],8,'Correct k2 value');equals($1_5['k3.1'],null,'Correct k3 value');this.$1_0.clear();equals(this.$1_0.get_length(),0,'Items cleared');}));}}
function main(){new TestLocalStorage.TestLocalStorege().run('LocalStorege');}
TestLocalStorage.TestLocalStorege.createClass('TestLocalStorage.TestLocalStorege',QUnitLibrary.QTest);
// ---- Do not remove this footer ----
// This script was generated using Script# v0.5.5.0 (http://projects.nikhilk.net/ScriptSharp)
// -----------------------------------