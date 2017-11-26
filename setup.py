from setuptools import setup

exec (open('components/version.py').read())

setup(
    name='components',
    version=__version__,
    author='',
    packages=['components'],
    include_package_data=True,
    license='MIT',
    description='Dash UI component suite',
    install_requires=[]
)
