from kivymd.app import MDApp
from kivymd.uix.button import MDRaisedButton
from kivymd.uix.screen import MDScreen


class Example(MDApp):
    def build(self):
        self.theme_cls.primary_palette = "Orange"
        self.theme_cls.theme_style = "Dark"

        return (
            MDScreen(
                MDRaisedButton(
                    text="Primary light",
                    pos_hint={"center_x": 0.5, "center_y": 0.7},
                    md_bg_color=self.theme_cls.primary_light,
                ),
                MDRaisedButton(
                    text="Primary color",
                    pos_hint={"center_x": 0.5, "center_y": 0.5},
                ),
                MDRaisedButton(
                    text="Primary dark",
                    pos_hint={"center_x": 0.5, "center_y": 0.3},
                    md_bg_color=self.theme_cls.primary_dark,
                ),
            )
        )


Example().run()