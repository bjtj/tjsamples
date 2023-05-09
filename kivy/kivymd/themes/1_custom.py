from kivy.properties import ObjectProperty

from kivymd.app import MDApp
from kivymd.uix.boxlayout import MDBoxLayout
from kivymd.uix.button import MDIconButton
from kivymd.uix.floatlayout import MDFloatLayout
from kivymd.uix.tab import MDTabsBase, MDTabs
from kivymd.icon_definitions import md_icons
from kivymd.uix.toolbar import MDTopAppBar

colors = {
    "Teal": {
        "200": "#212121",
        "500": "#212121",
        "700": "#212121",
    },
    "Red": {
        "200": "#C25554",
        "500": "#C25554",
        "700": "#C25554",
    },
    "Light": {
        "StatusBar": "E0E0E0",
        "AppBar": "#202020",
        "Background": "#2E3032",
        "CardsDialogs": "#FFFFFF",
        "FlatButtonDown": "#CCCCCC",
    },
}


class Tab(MDFloatLayout, MDTabsBase):
    '''Class implementing content for a tab.'''

    icon = ObjectProperty()


class Example(MDApp):
    icons = list(md_icons.keys())[15:30]

    def build(self):
        self.theme_cls.colors = colors
        self.theme_cls.primary_palette = "Teal"
        self.theme_cls.accent_palette = "Red"

        return (
            MDBoxLayout(
                MDTopAppBar(title="Custom theme"),
                MDTabs(id="tabs"),
                orientation="vertical",
            )
        )

    def on_start(self):
        for name_tab in self.icons:
            self.root.ids.tabs.add_widget(
                Tab(
                    MDIconButton(
                        icon=name_tab,
                        icon_size="48sp",
                        theme_icon_color="Custom",
                        icon_color="white",
                        pos_hint={"center_x": .5, "center_y": .5},
                    ),
                    title="This is " + name_tab,
                    icon=name_tab,
                )
            )


Example().run()