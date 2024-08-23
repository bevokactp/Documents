# -*- coding: UTF-8 -*-
#!/usr/bin/python3

import re, unicodedata, os, sys, pathlib


FILES_WITH_CHANGES = []
SIGNS_FOR_REPLACE = (
    ('Ґґ', 'Гг'),

    # не работает
    # ('ҐґЯя', 'ГгѦѧ'),
    # ('ие', 'ѣ'),
    # ('іе', 'ѣ'),
)
SKIPPED_PATH_WITH_CODS = os.pardir + '/' + os.getcwd().rsplit('/', 1)[1]


def count_changes(text, signs):
    return {i: text.count(i) for i in signs}


def normalize_text(path):
    with open(path, 'r+') as f:
        old_text = f.read()
        new_text = re.sub("[\u0300-\u036f]", "", unicodedata.normalize("NFC", old_text))
        new_text = new_text.translate(str.maketrans(*SIGNS_FOR_REPLACE[0]))
        if new_text != old_text:
            print(path)
            print(count_changes(old_text, SIGNS_FOR_REPLACE[0][0]))
            file_update(f, new_text)
    return new_text


def file_update(f, text):
    f.seek(0)
    f.write(text)
    f.truncate()


def tree_for_rename_walk(path):
    for dirpath, subdirs, files in os.walk(path):
        for object_name in files + subdirs:
            file_txt_path = dirpath + '/' + object_name
            if file_txt_path.endswith('.txt') and not file_txt_path.startswith(SKIPPED_PATH_WITH_CODS):
                normalize_text(file_txt_path)


def переименовать_всеясветное_в_кирилицу(path):
    filename.strip().lower()


def переименовать_по_базовым_пути_к_файлу_если_имя_нечитаемое(path):
    '_'.join()
    filename.strip().lower()
