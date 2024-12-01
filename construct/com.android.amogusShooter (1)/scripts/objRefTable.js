const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Behaviors.Bullet,
		C3.Plugins.Camera3D,
		C3.Behaviors.Pin,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.EightDir.Acts.SetMaxSpeed,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByImagePoint
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Wall: 0},
	{Back: 0},
	{"8Direction": 0},
	{Стеження: 0},
	{RoboCat: 0},
	{Keyboard: 0},
	{камера: 0},
	{Миша: 0},
	{Спрайт: 0},
	{Куля: 0},
	{СП: 0},
	{"3DКамера": 0},
	{Прикріплення: 0},
	{Спрайт2: 0}
];

self.InstanceType = {
	Wall: class extends self.ITilemapInstance {},
	Back: class extends self.ITilemapInstance {},
	RoboCat: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	камера: class extends self.ISpriteInstance {},
	Миша: class extends self.IInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	СП: class extends self.ISpriteInstance {},
	_3DКамера: class extends self.IInstance {},
	Спрайт2: class extends self.ISpriteInstance {}
}