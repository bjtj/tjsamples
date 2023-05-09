from kivymd.app import MDApp
from kivymd.uix.boxlayout import MDBoxLayout
from kivymd.uix.widget import MDWidget


class Example(MDApp):
    def build(self):
        self.theme_cls.theme_style = "Dark"  # "Light"
        self.theme_cls.theme_style = "Light"  # "Light"

        return (
            MDBoxLayout(
                MDWidget(
                    md_bg_color=self.theme_cls.bg_light,
                ),
                MDWidget(
                    md_bg_color=self.theme_cls.bg_normal,
                ),
                MDWidget(
                    md_bg_color=self.theme_cls.bg_dark,
                ),
                MDWidget(
                    md_bg_color=self.theme_cls.bg_darkest,
                ),
            )
        )


Example().run()