import os
import sys

modules = []

this_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.append(this_dir)
for module in os.listdir(this_dir):
    # avoid '__pycache__' and such
    if module.startswith('_'):
        continue
    module_path = os.path.join(os.path.join(this_dir, module))
    if not os.path.isdir(module_path):
        continue
    # make sure both the module/module.py and module/__init__.py are present
    module_main_file = '{}.py'.format(os.path.join(module_path, module))
    module_init_file = '{}.py'.format(os.path.join(module_path, '__init__'))
    if not os.path.isfile(module_main_file):
        raise Exception("Can't find {} file".format(module_main_file))
    if not os.path.isfile(module_init_file):
        raise Exception("Can't find {} file".format(module_init_file))
    __import__('{}.{}'.format(module, module))
    modules.append(module)

def get_globals():
    result = {}
    for m in modules:
        result[m] = getattr(sys.modules['{}.{}'.format(m, m)], m)
    return result
