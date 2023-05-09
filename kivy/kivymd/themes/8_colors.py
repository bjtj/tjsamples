from kivy.lang import Builder
from kivy.properties import ListProperty, StringProperty

from kivymd.color_definitions import colors
from kivymd.uix.tab import MDTabsBase
from kivymd.uix.boxlayout import MDBoxLayout

demo = '''
<Root@MDBoxLayout>
    orientation: 'vertical'

    MDTopAppBar:
        title: app.title

    MDTabs:
        id: android_tabs
        on_tab_switch: app.on_tab_switch(*args)
        size_hint_y: None
        height: "48dp"
        tab_indicator_anim: False

    RecycleView:
        id: rv
        key_viewclass: "viewclass"
        key_size: "height"

        RecycleBoxLayout:
            default_size: None, dp(48)
            default_size_hint: 1, None
            size_hint_y: None
            height: self.minimum_height
            orientation: "vertical"


<ItemColor>
    size_hint_y: None
    height: "42dp"

    MDLabel:
        text: root.text
        halign: "center"


<Tab>
'''

from kivy.factory import Factory

from kivymd.app import MDApp


class Tab(MDBoxLayout, MDTabsBase):
    pass


class ItemColor(MDBoxLayout):
    text = StringProperty()
    color = ListProperty()


class Palette(MDApp):
    title = "Colors definitions"

    def build(self):
        Builder.load_string(demo)
        self.screen = Factory.Root()

        for name_tab in colors.keys():
            tab = Tab(title=name_tab)
            self.screen.ids.android_tabs.add_widget(tab)
        return self.screen

    def on_tab_switch(
        self, instance_tabs, instance_tab, instance_tabs_label, tab_text
    ):
        self.screen.ids.rv.data = []
        if not tab_text:
            tab_text = 'Red'
        for value_color in colors[tab_text]:
            self.screen.ids.rv.data.append(
                {
                    "viewclass": "ItemColor",
                    "md_bg_color": colors[tab_text][value_color],
                    "title": value_color,
                }
            )

    def on_start(self):
        self.on_tab_switch(
            None,
            None,
            None,
            self.screen.ids.android_tabs.ids.layout.children[-1].text,
        )


Palette().run()