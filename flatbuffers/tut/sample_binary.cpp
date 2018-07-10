#include <iostream>
#include "monster_generated.h"

using namespace MyGame::Sample;
using namespace std;

int main(int argc, char *argv[])
{
    flatbuffers::FlatBufferBuilder builder;

    auto weapon_one_name = builder.CreateString("Sword");
    auto weapon_one_damage = 3;

    auto weapon_two_name = builder.CreateString("Axe");
    auto weapon_two_damage = 5;

    auto sword = CreateWeapon(builder, weapon_one_name, weapon_one_damage);
    auto axe = CreateWeapon(builder, weapon_two_name, weapon_two_damage);

    vector<flatbuffers::Offset<Weapon>> weapons_vector;
    weapons_vector.push_back(sword);
    weapons_vector.push_back(axe);
    auto weapons = builder.CreateVector(weapons_vector);

    auto position = Vec3(1.0f, 2.0f, 3.0f);

    auto name = builder.CreateString("MyMonster");

    unsigned char inv_data[] = {0,1,2,3,4,5,6,7,8,9};
    auto inventory = builder.CreateVector(inv_data, 10);

    auto orc = CreateMonster(builder, &position, 150, 80, name, inventory,
			     Color_Red, weapons, Equipment_Weapon, axe.Union());

    builder.Finish(orc);

    auto monster = GetMonster(builder.GetBufferPointer());

    assert(monster->hp() == 80);
    assert(monster->mana() == 150);
    assert(monster->name()->str() == "MyMonster");

    auto pos = monster->pos();
    assert(pos);
    assert(pos->z() == 3.0f);
    (void)pos;

    auto inv = monster->inventory();
    assert(inv);
    assert(inv->Get(9) == 9);
    (void)inv;

    string expected_weapon_names[] = {"Sword", "Axe"};
    short expected_weapon_damages[] = {3,5};
    auto weps = monster->weapons();
    for (unsigned int i = 0; i < weps->size(); ++i) {
	assert(weps->Get(i)->name()->str() == expected_weapon_names[i]);
	assert(weps->Get(i)->damage() == expected_weapon_damages[i]);
    }
    (void)expected_weapon_names;
    (void)expected_weapon_damages;

    assert(monster->equipped_type() == Equipment_Weapon);
    auto equipped = static_cast<const Weapon*>(monster->equipped());
    assert(equipped->name()->str() == "Axe");
    assert(equipped->damage() == 5);
    (void)equipped;

    cout << "The FlatBuffer was succesfully created and verified!" << endl;
    
    return 0;
}
