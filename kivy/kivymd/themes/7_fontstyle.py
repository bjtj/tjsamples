from kivy.core.text import LabelBase

from kivymd.app import MDApp
from kivymd.uix.screen import MDScreen
from kivymd.uix.label import MDLabel
from kivymd.font_definitions import theme_font_styles

# NOTE: It can throw error when it can not find the font.
# E.g.) `OSError: File JetBrainsMono-Regular.ttf not found`

class MainApp(MDApp):
    def build(self):
        self.theme_cls.theme_style = "Dark"

        LabelBase.register(
            name="JetBrainsMono",
            fn_regular="JetBrainsMono-Regular.ttf")

        theme_font_styles.append('JetBrainsMono')
        self.theme_cls.font_styles["JetBrainsMono"] = [
            "JetBrainsMono",
            16,
            False,
            0.15,
        ]
        return (
            MDScreen(
                MDLabel(
                    text="JetBrainsMono",
                    halign="center",
                    font_style="JetBrainsMono",
                )
            )
        )


MainApp().run()