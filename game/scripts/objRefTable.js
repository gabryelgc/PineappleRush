const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Behaviors.Bullet,
		C3.Behaviors.Tween,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Button,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Plugins.Sprite.Acts.AddRemoveAnimation,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Bullet.Acts.SetAcceleration,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Keyboard.Acts.LockKeyboard,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Sprite.Cnds.OnDestroyed
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos: 0},
	{Sólido: 0},
	{piso1: 0},
	{piso1Copia: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{jogador: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{piso2: 0},
	{Teclado: 0},
	{Mouse: 0},
	{piso3: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{top: 0},
	{Projétil: 0},
	{Interpolação: 0},
	{elevador: 0},
	{escudo: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite14: 0},
	{piso4: 0},
	{escudo2: 0},
	{terra: 0},
	{terra2: 0},
	{terra3: 0},
	{Sprite3: 0},
	{pontos: 0},
	{abacaxiPonto: 0},
	{Pontos: 0},
	{Sprite4: 0},
	{Sprite7: 0},
	{Sprite13: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{Sprite17: 0},
	{Sprite18: 0},
	{Sprite19: 0},
	{Sprite20: 0},
	{Sprite21: 0},
	{Sprite22: 0},
	{Sprite23: 0},
	{Sprite24: 0},
	{Sprite25: 0},
	{escudo3: 0},
	{escudo3_2: 0},
	{escudo3_3: 0},
	{escudo3_4: 0},
	{caixa_Assassina: 0},
	{caixa_Assassina2: 0},
	{escudo4: 0},
	{escudo4_2: 0},
	{escudo4_3: 0},
	{escudo4_4: 0},
	{Sprite26: 0},
	{impulsoFogo: 0},
	{Sprite27: 0},
	{Sprite28: 0},
	{Sprite29: 0},
	{Sprite30: 0},
	{Texto: 0},
	{Sprite31: 0},
	{Texto2: 0},
	{iniciarJogo: 0},
	{Áudio: 0},
	{MissaoConcluida: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{JogarNovamente: 0},
	{Texto3: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	piso1: class extends self.ISpriteInstance {},
	piso1Copia: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	piso2: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	piso3: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	elevador: class extends self.ISpriteInstance {},
	escudo: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	piso4: class extends self.ISpriteInstance {},
	escudo2: class extends self.ISpriteInstance {},
	terra: class extends self.ISpriteInstance {},
	terra2: class extends self.ISpriteInstance {},
	terra3: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	abacaxiPonto: class extends self.ISpriteInstance {},
	Pontos: class extends self.ITextInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	Sprite19: class extends self.ISpriteInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	Sprite22: class extends self.ISpriteInstance {},
	Sprite23: class extends self.ISpriteInstance {},
	Sprite24: class extends self.ISpriteInstance {},
	Sprite25: class extends self.ISpriteInstance {},
	escudo3: class extends self.ISpriteInstance {},
	escudo3_2: class extends self.ISpriteInstance {},
	escudo3_3: class extends self.ISpriteInstance {},
	escudo3_4: class extends self.ISpriteInstance {},
	caixa_Assassina: class extends self.ISpriteInstance {},
	caixa_Assassina2: class extends self.ISpriteInstance {},
	escudo4: class extends self.ISpriteInstance {},
	escudo4_2: class extends self.ISpriteInstance {},
	escudo4_3: class extends self.ISpriteInstance {},
	escudo4_4: class extends self.ISpriteInstance {},
	Sprite26: class extends self.ISpriteInstance {},
	impulsoFogo: class extends self.ISpriteInstance {},
	Sprite27: class extends self.ISpriteInstance {},
	Sprite28: class extends self.ISpriteInstance {},
	Sprite29: class extends self.ISpriteInstance {},
	Sprite30: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite31: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	iniciarJogo: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	MissaoConcluida: class extends self.ITextInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	JogarNovamente: class extends self.IButtonInstance {},
	Texto3: class extends self.ITextInstance {}
}