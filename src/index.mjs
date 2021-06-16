import { DummyClass, ExportedExtendedAndUsed } from './bug.mjs';

new ExportedExtendedAndUsed(); // will export as expected

const dummy = new DummyClass();
dummy.working();
